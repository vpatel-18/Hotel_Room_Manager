public class Room{

    private int roomNumber; 
    private boolean suite; 
    private RoomType type;
    private boolean occupied;
    private Guest occupant; 

    public Room(int num, boolean suiteStatus, RoomType roomType){

        roomNumber = num; 
        suite = suiteStatus; 
        type = roomType;  
        occupied = false;      

    }

    public int getRoomNUmber(){
        return roomNumber;
    }

    public boolean getSuiteStatus(){
        return suite;
    }

    public RoomType getRoomType(){
        return type;
    }

    public boolean ifOccupied(){
        return occupied;
    }

    public void setRoomOccupied(boolean x){
        occupied = x;
    }

    public String toString(){
        return roomNumber + " " + type + " " + occupied;
    }    

    public void checkInRoom(String first, String last, String address, double number){

        occupant = new Guest(first, last, address, number);
        occupied = true;

    }


// Swap out the room values to swap the data types itself, 
// Find out how to make Java calls from a Javascript program. 

    public void swapRoom(Room other){

        

    }


    public void checkOutRoom(){

        occupant = null;
        occupied = false;
        
    }


}