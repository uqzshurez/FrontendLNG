
package com.portfolio.lngport.Interface;

import com.portfolio.lngport.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    
    //Traemos una lista de personas
    public List<Persona> getPersona();
    
    //Aca guardamos un objeto de tipo persona
    
    public void savePersona(Persona persona);
    
    //Aca eliminamos un objeto y lo buscamos por su id
    public void deletePersona(Long id);
    
    //Buscar una persona por su id
    public Persona findPersona(Long id);
}
