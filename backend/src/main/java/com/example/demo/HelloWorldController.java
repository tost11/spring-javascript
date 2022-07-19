package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;


@RestController
public class HelloWorldController {

  //private List<Solardaten> daten=new ArrayList<>();

  @Autowired
  private SolarRepository solarRepository;

  @PostConstruct
  private void initialise(){
  //solarRepository.save(new Solardaten(1, 1, 1, 1));
  }




  @GetMapping("/")
  String test() {
      return "Hello World";
  }

    @RequestMapping(method=RequestMethod.POST, value="/api/data/add")
    public void neuesObj(@RequestBody Solardaten data){
    solarRepository.save(data);
   // daten.add(data);
      System.out.println(data);
    }

  @RequestMapping(method= RequestMethod.GET, value="/api/data/get/{id}")
  List<Solardaten> getData(@PathVariable Integer id) {

    return solarRepository.findAllByID(id);


    /*
    ArrayList<Solardaten> daten =new ArrayList<>();
    int i=0;
    for(Solardaten sd: daten){
      if((i+1)==id) {
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
    */

  }
}

