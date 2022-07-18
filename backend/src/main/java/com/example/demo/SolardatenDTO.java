package com.example.demo;
import java.util.List;
public class SolardatenDTO {

    private List<Solardaten> datenlist;

    public List<Solardaten> getDatenlist() {
        return datenlist;
    }

    public void setDatenlist(List<Solardaten> datenlist) {
        this.datenlist = datenlist;
    }

    public SolardatenDTO(List<Solardaten> datenlist) {
        this.datenlist = datenlist;
    }
}
