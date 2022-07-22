package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.net.http.HttpResponse;
import java.time.Duration;
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
    var t = new Thread(()->{
      while (true){
        solarRepository.save(new Solardaten(1, 1, 12, 1));
        try {
          Thread.sleep(5000);
        } catch (InterruptedException e) {
          throw new RuntimeException(e);
        }
      }
    });

    t.start();

  }






    @RequestMapping(method=RequestMethod.POST, value="/api/data/add")
    public void neuesObj(@RequestBody Solardaten data){
    solarRepository.save(data);
    //daten.add(data);
      System.out.println(data);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/api/data/get/Wh")
    public Wh WattStunden(){
    float verbrauch = 0.f;
    float produktion = 0.f;
    ZonedDateTime start = null;
    List<Solardaten> daten = solarRepository.findAll();
    Wh wh = new Wh(0.f, 0.f);
    for(Solardaten tmp : daten){
      if(start == null) {
        start = tmp.getDateTime();
        continue;
      }
      wh.addWh(tmp.getBatteryVoltage() * tmp.getOutputAmpere(), tmp.getInputAmpere() * tmp.getInputVoltage());

    }
    System.out.println(wh.getWh_production());
    System.out.println(wh.getWh_verbrauch());



    return wh;
    }

    @RequestMapping(method = RequestMethod.GET, value="/api/data/get/latest")
    ResponseEntity<Solardaten> latestData(){
    Solardaten latest = solarRepository.findFirst1ByOrderByDateTimeDesc();
    if(latest.getDateTime().isBefore(ZonedDateTime.now().minusMinutes(1)))
      return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    return new ResponseEntity<>(latest, HttpStatus.OK);

    }

    @RequestMapping(method=RequestMethod.GET, value="/api/data/get/oldestDate")
    Solardaten oldestData(){
    return solarRepository.findFirstDateTimeByOrderByDateTimeAsc();
    }

  @RequestMapping(method= RequestMethod.GET, value="/api/data/get/{sekunden}")
  List<Solardaten> getData(@PathVariable Long sekunden) {
    Solardaten latest = solarRepository.findFirst1ByOrderByDateTimeDesc();
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
      IV /= i;
      IA /= i;
      BV /= i;
      OA /= i;

     returns.add(new Solardaten(IV, IA, BV, OA));

     i = 0;
     IV = IA = BV = OA = 0.f;
    }
  }

  if(!returns.isEmpty())
    return returns;

  return werte;
  }

  @RequestMapping(method= RequestMethod.GET, value="/api/data/get/tage/{tage}")
  List<Solardaten> getDatumData(@PathVariable Long tage) {
    List<Solardaten> werte = solarRepository.findAllByDateTimeAfterOrderByDateTime(ZonedDateTime.now().minusDays(tage));
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
        IV /= i;
        IA /= i;
        BV /= i;
        OA /= i;

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

