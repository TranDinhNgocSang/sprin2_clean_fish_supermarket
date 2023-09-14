package com.example.clean_fish_supermarket.controller;

import com.example.clean_fish_supermarket.model.*;
import com.example.clean_fish_supermarket.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/order")
public class OrderController {
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


    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/{address}/{note}")
    public ResponseEntity<?> addOrder(@PathVariable String address, @PathVariable String note){
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            User user = userService.findUerByEmail(email).get();
            StatusOder statusOder = statusService.getStatusById(1);
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
            String formattedDate = dateFormat.format(date);
            List<Cart> list = cartService.getListCartByUser(user.getIdUser());
            OrderProduct orderProduct = new OrderProduct(address, formattedDate, note, statusOder, user);
            OrderProduct orderProduct1 = orderProductService.addOder(orderProduct);
            for (int i = 0; i < list.size(); i++) {
                OrderDetail orderDetail = new OrderDetail(list.get(i).getQuantityProduct(), orderProduct1,
                        list.get(i).getProduct());
                orderDetailService.addOrderDetail(orderDetail);
//                productService.updateQuantityProductById();
            }
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
