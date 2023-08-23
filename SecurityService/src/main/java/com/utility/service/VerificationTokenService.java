package com.utility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utility.entity.VerificationToken;
import com.utility.repository.VerificationTokenRepository;

@Service
public class VerificationTokenService implements VTServiceInterface{
	@Autowired
	private VerificationTokenRepository vtr;
	
	public Optional<VerificationToken> saveToken(VerificationToken vt) {
		Optional<List<VerificationToken>> o	=Optional.ofNullable(vtr.findAll().stream().filter(
		v->v.getUser().getId()==vt.getUser().getId())
		.collect(Collectors.toList()));
		List<VerificationToken> l=o.get();
		if(l.isEmpty()) {
			return Optional.ofNullable(vtr.save(vt));
		}
		VerificationToken vto=l.get(0);
		vto.setOtp(Integer.valueOf(vt.getOtp()));		
		return Optional.ofNullable(vtr.save(vto));
	}
	

}
