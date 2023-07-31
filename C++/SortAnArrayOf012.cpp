#include <bits/stdc++.h>
#include <conio.h>

using namespace std;

// function to swap elements
void swap(int arr[], int j, int i)
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

void sort(int arr[], int high, int mid, int low)
{

    while (mid <= high)
    {

        if (arr[mid] == 2)
        { // swap mid with high
            swap(arr, mid, high);
            high--;
        }
        else if (arr[mid] == 1)
        {
            mid++;
        }
        else if (arr[mid] == 0)
        { // swap mid with low
            swap(arr, mid, low);
            low++;
            mid++;
        }
    }
}

int main()
{
    int arr[] = {0, 0, 1, 0, 1, 2, 2, 0, 0, 1, 2, 2, 0, 2, 1, 2, 0, 1, 2, 1, 2};
    int high = sizeof(arr) / sizeof(arr[0]);
    sort(arr, high - 1, 0, 0);

    for (int i : arr)
    {
        cout << i << " ";
    }
    return 0;
}