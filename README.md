# Authentication
# lab-class-11
# lab-class-11
# Authentication

## Learning Objectives

* Create a Bearer Authentication parser
* Model a User and safely store their sensitive data
* Describe cryptographic hash and cypher algorithms
* Implement a Basic Authorization parser

### User Modeling

User models that have sensitive data that should **NEVER** be sent to client applications. If your application requires that users be able to read each others personal information, create a second Profile model to hold that data and strictly limit access to the Profile model. Safely using a second model will ensure that no users will accidentally (or maliciously) get access to sensitive information.

### Cryptography
Cryptograhpy is the science which studies methods for encoding messages so that they can be read only by a person who knows the secret information required for decoding, called the key; it includes cryptanalysis, the science of decoding encrypted messages without possessing the proper key, and has several other branches.


### Hash Algorithms
A Cryptographic Hash Algorithm takes a piece of data and produces a hash that is deliberately difficult to reverse. If identical data is passed into the algorithm the same hash will always be produced. Hash algorithms are often used for checking the integrity of data.



