package com.example.clean_fish_supermarket.controller;


import com.example.clean_fish_supermarket.config.PaymentConfig;
import com.example.clean_fish_supermarket.model.*;
import com.example.clean_fish_supermarket.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/vnpay")
public class PaymentVnpayControler {
    @Autowired
    private IOrderProductService orderProductService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IStatusService statusService;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private IProductService productService;


    @PostMapping("/create/{total}")
    public ResponseEntity<?> create(@PathVariable long total)
            throws UnsupportedEncodingException {

        String orderType = "170000";
//        long amount = Integer.parseInt(req.getParameter("amount"))*100;
//        String bankCode = req.getParameter("bankCode");


        String amount = String.valueOf(total * 100);
//        String amount = "10000000";
        String vnp_TxnRef = PaymentConfig.getRandomNumber(8);
//        String vnp_IpAddr = Config.getIpAddress(req);
        String vnp_TmnCode = PaymentConfig.vnp_TmnCode;
        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", PaymentConfig.vnp_Version);
        vnp_Params.put("vnp_Command", PaymentConfig.vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", "NCB");
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", orderType);
        vnp_Params.put("vnp_Locale", "vn");
//        String locate = req.getParameter("language");
//        if (locate != null && !locate.isEmpty()) {
//            vnp_Params.put("vnp_Locale", locate);
//        } else {
//            vnp_Params.put("vnp_Locale", "vn");
//        }
        vnp_Params.put("vnp_ReturnUrl", PaymentConfig.vnp_Returnurl);
        vnp_Params.put("vnp_IpAddr", "0:0:0:0:0:0:0:1");

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 3);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = PaymentConfig.hmacSHA512(PaymentConfig.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = PaymentConfig.vnp_PayUrl + "?" + queryUrl;
        return new ResponseEntity<>(paymentUrl, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/{address}/{note}")
    public ResponseEntity<OrderProduct> addOrder(@PathVariable String address, @PathVariable String note){
        OrderProduct orderProduct0 = null;
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            User user = userService.findUerByEmail(email).get();
            StatusOder statusOder = statusService.getStatusById(1);
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
            String formattedDate = dateFormat.format(date);
            List<Cart> list = cartService.getListCartByUser(user.getIdUser());
            if (list.size()>0) {
                OrderProduct orderProduct = new OrderProduct(address, formattedDate, note, statusOder, user);
                OrderProduct orderProduct1 = orderProductService.addOder(orderProduct);
                orderProduct0 = orderProduct1;
                for (int i = 0; i < list.size(); i++) {
                    OrderDetail orderDetail = new OrderDetail(list.get(i).getQuantityProduct(), orderProduct1,
                            list.get(i).getProduct());
                    orderDetailService.addOrderDetail(orderDetail);
//                    Product product = productService.getProductById(list.get(i).getProduct().getIdProduct());
//                    productService.updateQuantityProductById(product.getQuantity() - list.get(i).getQuantityProduct(),
//                            list.get(i).getProduct().getIdProduct());
                }
                cartService.deleteCartByUser(user.getIdUser());
            }
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(orderProduct0,HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @GetMapping("/keep-product")
    public void keepProduct (){
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            User user = userService.findUerByEmail(email).get();
            List<Cart> list = cartService.getListCartByUser(user.getIdUser());
                for (int i = 0; i < list.size(); i++) {
                    Product product = productService.getProductById(list.get(i).getProduct().getIdProduct());
                    productService.updateQuantityProductById(product.getQuantity() - list.get(i).getQuantityProduct(),
                            list.get(i).getProduct().getIdProduct());
                }
            }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @GetMapping("/return-product")
    public void returnProduct (){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findUerByEmail(email).get();
        List<Cart> list = cartService.getListCartByUser(user.getIdUser());
        for (int i = 0; i < list.size(); i++) {
            Product product = productService.getProductById(list.get(i).getProduct().getIdProduct());
            productService.updateQuantityProductById(product.getQuantity() + list.get(i).getQuantityProduct(),
                    list.get(i).getProduct().getIdProduct());
        }
    }


}
