#include <bits/stdc++.h>
#include <conio.h>

using namespace std;

int find_max_element(int arr[], int n)
{
    int max_elment = -9999;
    for (int i = 0; i < n; i++)
    {
        max_elment = max_elment < arr[i] ? arr[i] : max_elment;
    }
    return max_elment;
}

int kadene(int arr[], int n)
{
    int max_so_for = 0;
    int sum = 0;
    int max_is_negative = find_max_element(arr, n);

    if (max_is_negative < 0)
    {
        return max_is_negative;
    }

    for (int i = 0; i < n; i++)
    {
        sum += arr[i];
        if (max_so_for < sum)
        {
            max_so_for = sum;
        }

        if (sum < 0)
        {
            sum = 0;
        }
    }

    return max_so_for;
}

int main()
{
    int arr[] = {-1, -2, -3, -4, 8, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = kadene(arr, n);
    cout << result;
    return 0;
}
