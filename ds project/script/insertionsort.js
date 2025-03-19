function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#FF8B41");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#FFB980");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#FFB980");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#FFB980");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#FFB980");//Height update
    
            div_update(divs[i],div_sizes[i],"#9F6CD0");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#FF8B41");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#9F6CD0");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#BDE0A6");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#BDE0A6");//Color update

    enable_buttons();
}
