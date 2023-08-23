package com.utility.service;

import java.util.Properties;
import java.util.Random;
import java.util.function.Supplier;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;



@Service
public class EmailService implements EmailInterface{
	
	Supplier<Integer> s=()->{
		String otp="";
		for(int i=0;i<6;i++)
			otp=otp+(int)(Math.random()*10);
		return Integer.valueOf(otp);		
	};
		 
	
	public int sendMail(String too) {
		String subject="OTP from HomeEase";
		int otp=s.get();
		String meassage="<h1> OTP is "+otp+" </h1>"+"Don't share with others";
		String to=too;
		String from="homeease141@gmail.com";
		boolean flag=this.sendEmail(meassage, subject, to, from);
		if(flag)
		return otp;
		else
			return 0;
	}

	
	public boolean sendEmail(String message,String subject,String to,String from)
	{
		String host="smtp.gmail.com";
		Properties properties=	System.getProperties();
		properties.put("mail.smtp.host",host);
		properties.put("mail.smtp.port","465");
		properties.put("mail.smtp.ssl.enable","true");
		properties.put("mail.smtp.auth","true");
		Session session=	Session.getInstance(properties,new Authenticator() {

			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("homeease141@gmail.com","oycpxubcsesufqny");
			}
			
		});
		session.setDebug(true);
		MimeMessage mime= new MimeMessage(session);
		try {
			mime.setFrom(from);
			mime.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
			mime.setSubject(subject);
//			mime.setText(message);
			mime.setContent(message,"text/html");
			Transport.send(mime);
			return true;
		}
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
}

