package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.time.ZonedDateTime;
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
    //daten.add(data);
      System.out.println(data);
    }

    @RequestMapping(method = RequestMethod.GET, value="/api/data/get/latest")
    Solardaten latestData(){
    return solarRepository.findFirst1ByOrderByDateTimeDesc();
    }

  @RequestMapping(method= RequestMethod.GET, value="/api/data/get/{sekunden}")
  List<Solardaten> getData(@PathVariable Long sekunden) {
  List<Solardaten> werte = solarRepository.findAllByDateTimeAfterOrderByDateTime(ZonedDateTime.now().minusSeconds(sekunden));
  ArrayList<Solardaten> returns = new ArrayList<Solardaten>();
  int i = 0;
  float IV = 0;
  float IA = 0;
  float BV = 0;
  float OA = 0;

  for(Solardaten solar : werte){
    IV += solar.getInputVoltage();
    IA += solar.getInputAmpere();
    BV += solar.getBatteryVoltage();
    OA += solar.getOutputAmpere();
    i++;
    if(i >= werte.size() / 100){
      IV /= werte.size() / 100.f;
      IA /= werte.size() / 100.f;
      BV /= werte.size() / 100.f;
      OA /= werte.size() / 100.f;

     returns.add(new Solardaten(IV, IA, BV, OA));

     i = 0;
     IV = IA = BV = OA = 0.f;
    }
  }

  if(!returns.isEmpty())
    return returns;
  return werte;
  }
}

