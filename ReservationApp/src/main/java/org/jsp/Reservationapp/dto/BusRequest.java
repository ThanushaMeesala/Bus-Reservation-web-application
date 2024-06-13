package org.jsp.Reservationapp.dto;


import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class BusRequest {
	private int id;
	@NotBlank(message = "Name is mandatory")
	private String bus_name;
	@NotBlank(message = "Bus number is mandatory")
	private String busNumber;
	private LocalDate dateOfDeparture;
	@NotBlank(message = "from is mandatory")
	private String from;
	@NotBlank(message = "to is mandatory")
	private String to;
	private int numberOfSeats;
	private int availableSeats;
	private double costPerSeat;

}
