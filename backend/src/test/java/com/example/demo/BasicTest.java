package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

@SpringBootTest
public class BasicTest {
    @Autowired
    SolarRepository solarRepository;

    @Test
    public void runTest() {
        Solardaten testDaten = new Solardaten();
        Solardaten rueckgabeDaten;
        RestTemplate temp = new RestTemplate();
        for (int i = 0; i < 5; i++) {
            Solardaten solardaten = new Solardaten(15.2f, 2, 14.2f, 3);
            HttpEntity<Solardaten> send = new HttpEntity<>(solardaten);
            testDaten = solardaten;
            temp.postForObject("http://localhost:8080/api/data/add", send, Solardaten.class);
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (InterruptedException e) {
                System.out.println("Ignore");
            }

        }
        rueckgabeDaten = temp.getForObject("http://localhost:8080/api/data/get/latest", Solardaten.class);

    }
}
