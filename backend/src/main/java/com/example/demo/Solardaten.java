package com.example.demo;


public class Solardaten {
    private float inputVoltage;
    private float inputAmpere;
    private float batteryVoltage;
    private float outputAmpere;
    static private int ID=0;

    public Solardaten(float inputVoltage, float inputAmpere, float batteryVoltage, float outputAmpere) {
        this.inputVoltage = inputVoltage;
        this.inputAmpere = inputAmpere;
        this.batteryVoltage = batteryVoltage;
        this.outputAmpere = outputAmpere;
        ID++;
    }

    public Solardaten() {
    }

    @Override
    public String toString() {
        return "Solardaten{" +
                "inputVoltage=" + inputVoltage +
                ", inputAmpere=" + inputAmpere +
                ", batteryVoltage=" + batteryVoltage +
                ", outputAmpere=" + outputAmpere +
                '}';
    }

    public float getInputVoltage() {
        return inputVoltage;
    }

    public void setInputVoltage(float inputVoltage) {
        this.inputVoltage = inputVoltage;
    }

    public float getInputAmpere() {
        return inputAmpere;
    }

    public void setInputAmpere(float inputAmpere) {
        this.inputAmpere = inputAmpere;
    }

    public float getBatteryVoltage() {
        return batteryVoltage;
    }

    public void setBatteryVoltage(float batteryVoltage) {
        this.batteryVoltage = batteryVoltage;
    }

    public float getOutputAmpere() {
        return outputAmpere;
    }

    public void setOutputAmpere(float outputAmpere) {
        this.outputAmpere = outputAmpere;
    }

    public static int getID() {
        return ID;
    }

    public static void setID(int ID) {
        Solardaten.ID = ID;
    }
}