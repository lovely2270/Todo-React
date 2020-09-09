package com.example.demo.model;

import java.sql.Timestamp;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Data
public class TodoInfo {
	private String id;
	private String text;
	private Boolean checked;
	private Timestamp createTime;
	private String dday;
	
	public void setId(String id2) {
		this.id=id2;
	}
	public String getId() {
		return id;
	}
	public void setText(String text2) {
		this.text=text2;
	}
	public String getText() {
		return text;
	}
	public void setChecked(Boolean checked2) {
		this.checked = checked2;
	}
	public Boolean getChecked() {
		return checked;
	}
	public void setCreateTime(Timestamp createTime2) {
		this.createTime = createTime2;
	}
	public Timestamp getCreateTime() {
		return createTime;
	}
	public void setDDay(String dday2) {
		this.dday = dday2;
	}
	public String getDDay() {
		return dday;
	}
	
}
