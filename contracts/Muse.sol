pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract Muse is Ownable{
	
   using SafeMath for uint256;
   struct Muse {
   		string name;
   		string data;
   }
	
   Muse[] public muses;
   uint public nbMuse ;
   
   function addMuse(string memory _name,string memory _data) public{
   	    Muse memory _muse = Muse({
			name: _name,
			data : _data
        });  
        
        muses.push(_muse) ;  
        nbMuse= nbMuse.add(1);
		 
	}
	
}