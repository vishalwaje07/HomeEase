package com.utility.service;

import java.util.Optional;

import com.utility.entity.VerificationToken;

public interface VTServiceInterface {
	public Optional<VerificationToken> saveToken(VerificationToken vt);
}
