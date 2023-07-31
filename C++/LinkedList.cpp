#include <bits/stdc++.h>
#include <conio.h>

using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node(int val)
    {
        this->data = val;
        this->next = NULL;
    }
};

class LinkedList
{

    Node *head = NULL;

public:
    void insert(int data)
    {
        Node *new_node = new Node(data);
        if (head == NULL)
        {
            head = new_node;
            return;
        }

        Node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = new_node;
    }

    void print()
    {
        Node *temp = head;

        while (temp != NULL)
        {
            cout << temp->data << "->";
            temp = temp->next;
        }
        cout << "NULL"
             << "\n";
    }

    void remove()
    {
        Node *temp = head;
        while (temp->next->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = NULL;
    }

    void reverse()
    {
        Node *temp = head;
        Node *prev = NULL;
        while (temp != NULL)
        {
            Node *next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }

        head = prev;
    }
};

int main()
{
    LinkedList list;
    list.insert(4);
    list.insert(5);
    list.insert(6);
    list.insert(7);
    list.print();
    list.reverse();
    list.print();
    // list.remove();
    // list.print();
    return 0;
}