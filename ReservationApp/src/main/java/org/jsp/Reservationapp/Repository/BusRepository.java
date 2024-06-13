package org.jsp.Reservationapp.Repository;

import java.time.LocalDate;
import java.util.List;

import org.jsp.Reservationapp.Model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusRepository extends JpaRepository<Bus, Integer>{
//	List<Bus> findByName(String name);
//List<Bus> findByfrom_locationandto_loctaion(String from_location, String to_location);
//List<Bus> findByName(String name);
	@Query("select b from Bus b where b.admin.id=?1")
	List<Bus> findByAdminId(int id);

	@Query("select b from Bus b where b.from=?1 and b.to=?2 and b.dateOfDeparture=?3")
	List<Bus> findBuses(String from, String to, LocalDate dateOfDeparture);
}
