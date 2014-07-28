/* 
* EuscreenxlpreviewApplication.java
* 
* Copyright (c) 2012 Noterik B.V.
* 
* This file is part of Lou, related to the Noterik Springfield project.
*
* Lou is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* Lou is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with Lou.  If not, see <http://www.gnu.org/licenses/>.
*/
package org.springfield.lou.application.types;

import java.io.BufferedReader;
import java.io.File;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.Namespace;

import java.io.InputStreamReader;
import java.net.URL;
import java.util.*;

import org.springfield.lou.application.Html5Application;
import org.springfield.lou.application.Html5ApplicationInterface;
import org.springfield.lou.application.components.BasicComponent;
import org.springfield.lou.application.components.ComponentInterface;
import org.springfield.lou.fs.*;
import org.springfield.lou.homer.LazyHomer;
import org.springfield.lou.screen.Screen;


public class EuscreenxlelementsApplication extends Html5Application{
	
	/*
	 * Constructor for the preview application for EUScreen providers
	 * so they can check and debug their uploaded collections.
	 */
	public EuscreenxlelementsApplication(String id) {
		super(id); 
		// default scoop is each screen is its own location, so no multiscreen effects
		setLocationScope("screen"); 

	}
	

}
