package com.example.demo;

import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;


@RestController
public class HelloWorldController {

  private List<Solardaten> daten=new ArrayList<>();

  @GetMapping("/")
  String test() {
      return "Hello World";
    }

    @RequestMapping(method=RequestMethod.POST, value="/api/data/add")
    public void neuesObj(@RequestBody Solardaten data){
    daten.add(data);
      System.out.println(data);
    }

  @RequestMapping(method= RequestMethod.GET, value="/api/data/get/{id}")
  SolardatenDTO getData(@PathVariable Integer id) {
    ArrayList<Solardaten> d=new ArrayList<>();
    int i=0;
    for(Solardaten sd: daten){
      if((i+1)==id) {
        sd = daten.get(i);
        d.add(sd);
      }
      i++;
    }
    if(d.size() != 0) {
      SolardatenDTO obj = new SolardatenDTO(d);
      return obj;
    }
    else{
      return null;
    }
  }
}

