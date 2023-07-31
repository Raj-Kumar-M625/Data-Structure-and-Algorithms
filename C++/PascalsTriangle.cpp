#include <bits/stdc++.h>
#include <conio.h>

using namespace std;

vector<vector<int>> PascalsTriangle(int numRows)
{
    vector<vector<int>> answer;
    vector<int> temp;

    if (numRows == 1)
    {
        temp.push_back(1);
        answer.push_back(temp);
        return answer;
    }

    if (numRows == 2)
    {
        temp.push_back(1);
        answer.push_back(temp);
        temp.push_back(1);
        answer.push_back(temp);
        return answer;
    }

    if (numRows > 2)
    {
        temp.push_back(1);
        answer.push_back(temp);
        temp.push_back(1);
        answer.push_back(temp);
        temp.push_back(1);
        answer.push_back(temp);

        while (numRows > 0)
        {
            int n = answer.size();
            vector<int> temp2;
            for (int i = 0; i < answer[n - 1].size(); i++)
            {
                int x = answer[n - 1][i];
                int y = answer[n - 1][i + 1];
                temp2.push_back(x + y);
            }
            answer.push_back(temp2);
            temp2.clear();
            numRows--;
        }
    }

    return answer;
}

int main()
{

    return 0;
}