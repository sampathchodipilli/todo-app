package com.app.todo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private Boolean active;
	private Boolean deletedFlag;
	private String createdBy;
	private Date createdDate;
	private String lastUpdBy;
	private Date lastUpdDate;

	public Todo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Todo(Integer id, String name, Boolean active, Boolean deletedFlag, String createdBy, Date createdDate,
			String lastUpdBy, Date lastUpdDate) {
		super();
		this.id = id;
		this.name = name;
		this.active = active;
		this.deletedFlag = deletedFlag;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
		this.lastUpdBy = lastUpdBy;
		this.lastUpdDate = lastUpdDate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Boolean getDeletedFlag() {
		return deletedFlag;
	}

	public void setDeletedFlag(Boolean deletedFlag) {
		this.deletedFlag = deletedFlag;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getLastUpdBy() {
		return lastUpdBy;
	}

	public void setLastUpdBy(String lastUpdBy) {
		this.lastUpdBy = lastUpdBy;
	}

	public Date getLastUpdDate() {
		return lastUpdDate;
	}

	public void setLastUpdDate(Date lastUpdDate) {
		this.lastUpdDate = lastUpdDate;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", name=" + name + ", active=" + active + ", deletedFlag=" + deletedFlag
				+ ", createdBy=" + createdBy + ", createdDate=" + createdDate + ", lastUpdBy=" + lastUpdBy
				+ ", lastUpdDate=" + lastUpdDate + "]";
	}

}
