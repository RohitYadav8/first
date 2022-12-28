 import java.util.*;
public class LinkedHashmap{
    public static void main (String[]args){
       LinkedHashMap<Integer,String>name=new LinkedHashMap<Integer,String>();
        name.put(1 ,"Rohit");
        name.put(2 ,"Rahul");
        name.put(3 ,"kohli");
        System.out.println("LinkedHashmap:");
        for(Map.Entry me:name.entrySet()){
            System.out.println(me.getKey()+""+me.getValue());
        }
    }

} 
    

