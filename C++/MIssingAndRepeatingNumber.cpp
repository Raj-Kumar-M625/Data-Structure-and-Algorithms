#include <bits/stdc++.h>
#include <utility>
#include <conio.h>

using namespace std;

pair<int, int> missingAndRepeating(vector<int> &nums, int n)
{

    vector<int> frequency_array(nums.size());
    int missing_number = 0;
    int repeating_number = 0;
    fill(frequency_array.begin(), frequency_array.end(), 0);

    for (int i = 1; i <= nums.size(); i++)
    {
        frequency_array[nums[i - 1]] = frequency_array[nums[i - 1]] + 1;
        if (frequency_array[nums[i - 1]] > 1)
        {
            repeating_number = nums[i - 1];
        }
    }

    for (int i = 1; i <= nums.size(); i++)
    {
        if (frequency_array[i] == 0)
        {
            missing_number = i;
        }
    }
    return make_pair(missing_number, repeating_number);
}

int main()
{
    vector<int> arr = {6, 4, 3, 5, 5, 1};
    int x = missingAndRepeating(arr, 3).first;
    int y = missingAndRepeating(arr, 3).second;
    cout << x << " " << y;

    return 0;
}
