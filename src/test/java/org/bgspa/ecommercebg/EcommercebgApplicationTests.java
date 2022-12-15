package org.bgspa.ecommercebg;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.DisplayName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc

class EcommercebgApplicationTests {
	@Autowired
	private MockMvc mockMvc;

	@Test  //Anotacion que ayuda a probar la aplicacion 
	@DisplayName("Prueba el método GET de productos y valida el resultado")
	public void pruebaGets() throws Exception {
		this.mockMvc.perform(get("/api/productos/1"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(content().string(containsString("Sani spray") )); //Lo que contiene el producto. En esta parte no se permiten acentos.
		
		this.mockMvc.perform(get("/api/productos/2"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(content().string(containsString("Mineral Tuzlar") )); //Lo que contiene el producto
		
	}//pruebaGets


}
