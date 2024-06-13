package org.jsp.Reservationapp.Dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.jsp.Reservationapp.Model.Admin;
import org.jsp.Reservationapp.Model.Bus;
import org.jsp.Reservationapp.Repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BusDao {
@Autowired
private BusRepository busrepository;
@Autowired
private BusRepository busRepository;

public Bus saveBus(Bus bus) {
	return busRepository.save(bus);
}

public Optional<Bus> findById(int id) {
	return busRepository.findById(id);
}

public List<Bus> findAll() {
	return busRepository.findAll();
}

public List<Bus> findBuses(String from, String to, LocalDate dateOfDeparture) {
	return busRepository.findBuses(from, to, dateOfDeparture);
}

public List<Bus> findBusesByAdminId(int admin_id) {
	return busRepository.findByAdminId(admin_id);
}
public void delete(int id) {
	busRepository.deleteById(id);
}
}
