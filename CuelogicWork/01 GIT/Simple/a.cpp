#include<iostream>
#include<stdio.h>

using namespace std;

struct node
{
	public:

	int i;
	
	node()
	{
		cout<<"\nIn node constructor\n";
	}

	~node()
	{
		cout<<"\nIn node destructor\n\n";
	}
	
};	

class demo:public node
{
	public:

	demo()
	{
		cout<<"\nIn demo constructor\n";
	}

	~demo()
	{
		cout<<"\nIn demo destructor\n";
	}
	
};

int main()
{
	node *n=new node;
	demo d;
//	n=new demo;

	cout<<"\n";

	return 0;
}


