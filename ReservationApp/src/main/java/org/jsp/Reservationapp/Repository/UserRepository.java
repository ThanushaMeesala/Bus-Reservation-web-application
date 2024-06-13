package org.jsp.Reservationapp.Repository;

import java.util.Optional;

import org.jsp.Reservationapp.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	Optional<User> findByPhoneAndPassword(long phone, String password);

	Optional<User> findByEmailAndPassword(String email, String password);
	Optional<User> findByToken(String token);
}
