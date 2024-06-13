package org.jsp.Reservationapp.Service;

import org.jsp.Reservationapp.dto.EmailConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service

public class ReservationApiMailService {
	@Autowired
	private JavaMailSender javaMailSender;

	public String sendMail(EmailConfiguration emailConfiguartion) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(emailConfiguartion.getToAddress());
		simpleMailMessage.setText(emailConfiguartion.getText());
		simpleMailMessage.setSubject(emailConfiguartion.getSubject());
		javaMailSender.send(simpleMailMessage);
		return "Registration succesfull and Verification mail has been sent";
	}

}
