#include <bits/stdc++.h>
#include <conio.h>

using namespace std;

void subsetSumsHelper(int ind, vector<int> &arr, int n, vector<int> &ans, int sum)
{
    if (ind == n)
    {
        ans.push_back(sum);
        return;
    }

    // element is picked
    subsetSumsHelper(ind + 1, arr, n, ans, sum + arr[ind]);
    // element is not picked
    subsetSumsHelper(ind + 1, arr, n, ans, sum);
}

int main()
{
    vector<int> ans;
    vector<int> arr = {1, 2};
    int n = arr.size();
    subsetSumsHelper(0, arr, n, ans, 0);

    for (auto a : ans)
    {
        cout << a << " ";
    }
    return 0;
}