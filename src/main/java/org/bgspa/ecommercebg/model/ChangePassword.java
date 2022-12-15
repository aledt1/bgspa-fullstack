package org.bgspa.ecommercebg.model;

public class ChangePassword {
	
	private String contrasena;
	private String newContrasena;
	
	
	public ChangePassword(String contrasena, String newContrasena) {
		super();
		this.contrasena = contrasena;
		this.newContrasena = newContrasena;
	}//constructor
	
	public ChangePassword() {
		
	}//constructor vacio

	//getter y setter
	
	public String getContrasena() {
		return contrasena;
	}//getContrasena


	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}//setContrasena


	public String getNewContrasena() {
		return newContrasena;
	}//getNew


	public void setNewContrasena(String newContrasena) {
		this.newContrasena = newContrasena;
	}//SetNew


	
	@Override
	public String toString() {
		return "ChangePassword [contrasena=" + contrasena + ", newContrasena=" + newContrasena + "]";
	}// to string
	
	
	
	
	
}//class ChangePassword
