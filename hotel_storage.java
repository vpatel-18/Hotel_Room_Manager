import java.util.ArrayList;


class hotel_storage{

    public static ArrayList<Room> setUpInitialRooms(int room1, int roomQuantity){

        ArrayList<Room> addedRooms = new ArrayList<>();

        for(int i = room1; i <= roomQuantity; i++){

            addedRooms.add(new Room(i, false, RoomType.NDD));

        }

        return addedRooms; 
    }

    public static void main(String args[]){

        int firstRoom = 119; 
        int lastRoom = 159; 

        ArrayList<Room> rooms = setUpInitialRooms(firstRoom, lastRoom);

        for(int i = 0; i < rooms.size(); i++){
            System.out.println(rooms.get(i));
        }
    }


}

