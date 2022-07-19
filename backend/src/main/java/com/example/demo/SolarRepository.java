package com.example.demo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface SolarRepository extends PagingAndSortingRepository<Solardaten, Integer> {

    List<Solardaten> findAllByID(Integer ID);

}
