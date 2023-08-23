package com.utility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableEurekaClient
@CrossOrigin(origins = "*")
public class CloudApiGatewayApplication  {

	
//	@Autowired
//    private Environment env;
	public static void main(String[] args) {
		SpringApplication.run(CloudApiGatewayApplication.class, args);
		
//		@Bean   
//		public WebMvcConfigurer corsConfigurer() {
//			return new WebMvcConfigurer() {
//				@Override
//				public void addCorsMappings(CorsRegistry registry) {
//					registry.addMapping("/").allowedOrigins("http://localhost:8082");
//				}
//			};
//		}
		
	}

//	@Bean   
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/").allowedOrigins("http://localhost:8082");
//			}
//		};
//	}

	
	//	cors:
//        exposed-headers: "*"       
//        allowed-headers: "*"
//        allowed-methods: "*"        
//        allowed-origins: "*"
//        allowed-origin-patterns: "*"   
//	 @SuppressWarnings("deprecation")
//	@Bean
//	    public WebMvcConfigurer corsConfigurer() {
//	        return new WebMvcConfigurerAdapter() {
//	            @Override
//	            public void addCorsMappings(CorsRegistry registry) {
//	                String urls = env.getProperty("cors.urls");
//	                CorsRegistration reg = registry.addMapping("/**");
//	                for(String url: urls.split(",")) {
//	                    reg.allowedOrigins(url);
//	                }
//	            }
//	        };
//	    } 

}
