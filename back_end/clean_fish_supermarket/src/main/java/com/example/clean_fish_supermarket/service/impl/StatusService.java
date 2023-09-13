package com.example.clean_fish_supermarket.service.impl;

import com.example.clean_fish_supermarket.model.StatusOder;
import com.example.clean_fish_supermarket.repository.IStatusOderReposiroty;
import com.example.clean_fish_supermarket.service.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatusService implements IStatusService {
    @Autowired
    private IStatusOderReposiroty statusOderReposiroty;
    @Override
    public StatusOder getStatusById(int id) {
        return statusOderReposiroty.findById(id).orElse(null);
    }
}
