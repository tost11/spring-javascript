package com.example.demo;

import java.time.Duration;

public class Wh {
    private float wh_production;
    private float wh_verbrauch;
    private long ws_verbrauch;
    private long ws_production;

    public Wh(float wh_production, float wh_verbrauch) {
        this.wh_production = wh_production;
        this.wh_verbrauch = wh_verbrauch;
    }


    public float getWh_production() {
        wh_production = ws_production / 60.f / 60.f;
        return wh_production;
    }

    public void setWh_production(float wh_production) {
        this.wh_production = wh_production;
    }

    public float getWh_verbrauch() {
        wh_verbrauch = ws_verbrauch / 60.f / 60.f;
        return wh_verbrauch;
    }

    public void setWh_verbrauch(float wh_verbrauch) {
        this.wh_verbrauch = wh_verbrauch;
    }

    public void addWh(float w_verbrauch, float w_production){
        ws_verbrauch += w_verbrauch * 5;
        ws_production += w_production * 5;
    }

}
