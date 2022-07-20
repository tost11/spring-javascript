package com.example.demo;
import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Solardaten")
public class Solardaten {
    private float inputVoltage;
    private float inputAmpere;
    private float batteryVoltage;
    private float outputAmpere;
    private ZonedDateTime dateTime;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;


    static private int auto_ID=0;

    public Solardaten(float inputVoltage, float inputAmpere, float batteryVoltage, float outputAmpere) {
        this.inputVoltage = inputVoltage;
        this.inputAmpere = inputAmpere;
        this.batteryVoltage = batteryVoltage;
        this.outputAmpere = outputAmpere;
        dateTime = ZonedDateTime.now();
    }

    public Solardaten() {
        dateTime = ZonedDateTime.now();
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

    public void setDateTime(ZonedDateTime time) { dateTime = time; }
    public ZonedDateTime getDateTime() { return dateTime; }
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
        return auto_ID;
    }

    public static void setID(int ID) {
        Solardaten.auto_ID = ID;
    }

}