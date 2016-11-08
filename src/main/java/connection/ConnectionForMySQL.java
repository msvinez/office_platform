package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.NamingException;

public class ConnectionForMySQL {

    Connection connection = null;
	Statement statement= null;
	public Statement getConnection(){
	    try{
			connection = DriverManager.getConnection("jdbc:mysql://localhost/test?useSSL=false", "root", "1111");
			statement = connection.createStatement();
		} catch (SQLException e) {
			System.out.print("Відбулась помилка під час спроби підключення до БД");
			e.printStackTrace();
		}
		return statement;		
	}
	
	 public void closeConnection(){
			try {
				statement.close();
				connection.close();
			} catch (SQLException e) {
				System.out.print("Відбулась помилка під час закриття з'єднання з БД");
				e.printStackTrace();
			}
	 }
}
//public Connection getConnection(){
//Connection connection = null;
//try{
//	connection = DriverManager.getConnection("jdbc:mysql://localhost/test?useSSL=false", "root", "1111");
//	Statement st = connection.createStatement();
//} catch (SQLException e) {
//	System.out.print("Відбулась помилка під час спроби підключення до БД");
//}
//return connection;		
//}