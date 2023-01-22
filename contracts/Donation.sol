// SPDX-License-Identifier: MIT
pragma solidity^0.8.17 ; 
contract Donation { 
   string public name = "Donation";
   address manager ; 
   uint256 public studentID ; 
   constructor(){
      manager = msg.sender ; 
   }
   struct Student { 
      string name ; 
      uint256 age ; 
      string acadamicLevel ; 
      string imageURL ; 
   }
   mapping(uint256  => Student ) studentList ; 
  
   struct Sponserer { 
      string name ;
      uint256 studentId ; 
      uint256 amount ; 
   }
   mapping(address  => Sponserer ) sponserserList ; 
   // address of sponser => sponserer
   event DonationList(address from , uint256 amount);
   event StudentList(string name , uint256 age ,  string acadamicLevel , string imageURL);
   event SponsershipList(address from , uint256 amount , uint256 studentID);
   event RedeemList(address to , uint256 amount , string BudgetDettail);
   function donate( address by , uint256 amount ) public payable { 
      // require(msg.value > .001 ether , "No sufficient ether");
      emit DonationList(by , amount) ; 
   } 
   function sponserStudent(address by ,uint256 studentID ,uint256 amount ) public payable  { 
      // require(msg.value > .001 ether , "No sufficient ether");
      emit SponsershipList(by , studentID ,  amount) ; 
   }
   function redeem( string memory budgetFile ,uint256 amount ,  address to) public{
        emit RedeemList( to ,  amount ,  budgetFile);

   }
   function registerStudent( string memory _name, uint256 age, string memory acadamicLevel , string memory imageURL ) public {
      studentList[studentID]  = Student(_name , age , acadamicLevel , imageURL)  ; 
      emit StudentList(_name ,  age ,   acadamicLevel ,  imageURL);
      studentID++ ; 
   }
   function registerSponserer( string memory name, uint256 studentId, uint256 amount) public {
      sponserserList[msg.sender]  = Sponserer(name , studentId , amount) ; 
   }

   function OwnBalance() public returns (uint256) {
      return address(this).balance ; 

   }
}