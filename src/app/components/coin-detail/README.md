# Coin detail component

This component is used to display the details of a coin. It instantiates the 'Activated Route' class to get the id of the coin (by using the map operator on the observable), and then sets it equal to the coinSymbol property (using the tap operator).

Once the observable is evaluated, the coinSymbol property is used to get the coin details from the CoinService.
