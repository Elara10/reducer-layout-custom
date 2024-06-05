// wap in py to find no is  a prime no or not

#include<iostream>
using namespace std;
int main()
{
    int n=10;
    if(n<=1)
    {
        cout<< n<<" is not a prime no";
    }
    if(n==2)
    {
      cout<< n <<"is a prime no";
    }
    if(n>2)
    
     if(n%2==0)
     {
        cout<<n <<"is not a prime no.";
     }
     else{
        cout<<n <<"is  a prime no.";

     }
    
}
