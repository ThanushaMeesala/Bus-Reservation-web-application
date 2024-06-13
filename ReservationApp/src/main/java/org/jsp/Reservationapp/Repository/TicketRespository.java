package org.jsp.Reservationapp.Repository;

import org.jsp.Reservationapp.Model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRespository extends JpaRepository<Ticket, Integer> {

}
