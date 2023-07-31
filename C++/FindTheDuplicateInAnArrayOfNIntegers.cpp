#include <bits/stdc++.h>
#include <conio.h>

using namespace std;

int Find_Duplicate(vector<int> &nums)
{
    vector<int> frequency_array(nums.size() + 1);
    fill(frequency_array.begin(), frequency_array.end(), 0);

    for (int i = 0; i < nums.size(); i++)
    {
        frequency_array[nums[i]] = frequency_array[nums[i]] + 1;
        if (frequency_array[nums[i]] > 1)
        {
            return nums[i];
        }
    }

    return -1;
}

int main()
{
    vector<int> nums = {1, 3, 6, 6, 4, 2};
    cout << Find_Duplicate(nums);
    return 0;
}
