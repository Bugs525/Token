contract myToken {
    string public tokenName = "META";
    string public tokenAbbrv = "MTA";
    uint public totalSupply = 0;

    mapping(address => uint) public balances;

    function mint (address _address, uint _values) public{
        totalSupply += _values;
        balances[_address] += _values;
    }

    function burn (address _address, uint _value) public {
        if (balances[_address] >= _value) {
            totalSupply -= _value;
            balances[_address] -= _value;

        }
    }
}
