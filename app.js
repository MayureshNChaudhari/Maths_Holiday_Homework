var x = 0;
let x3 = 0;
let x2 = 100000000000000000000000000000;

let temp_idk_which_one_this_is = 0;
let temp_idk_which_one_this_is_2 = 0;
let temp_idk_which_one_this_is_3 = 0;
let temp_idk_which_one_this_is_4 = 0;
let end_node_color = [];
//33 col 
//17 row
const start_point1 = [];
const start_point2_1 = [];
const start_point3 = [];
const end_point = [];
let end_node = [];
let start_node=[];
let close_list0=[];
let close_list1=[];

const rc = [];
const wall = [];
const path = [];

const f = [];
const f2 = [];
const f3 = [];
const f4 = [];

var f_score = [];

const f_node = [];
const f_node2 = [];
const f_node3 = [];
const f_node4 = [];

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

let count_horizontal=0;
let count_verticle=0;

let diagonal_node="";
let diagonal=0;
let diagonal2=0;
let vertical_node1="";
let vertical_node2="";
let vertical1=0;
let vertical2=0;

function wall_cords() {
    let t = rc.length;
    for (let i = 0; i < t; i++) {
        if (rc[i] == rc[++i]) {
            let black = rc[i];
            wall.push(black)
            console.log(wall);
        }
        else {
            let black = rc[--i] + " " + rc[++i];
            wall.push(black);
            console.log(wall);
        }
    }
}

function h(x1, y1, x2, y2) {
    const xDiff = Math.abs(x2 - x1);
    const yDiff = Math.abs(y2 - y1);

    const distance = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
    return distance;
}

document.addEventListener('click', (e) => {
    let m = 0;
    let n = 0;
    if (x == 0) {
        document.addEventListener('click', (e) => {
            let elementClass = e.target.className;
            if (elementClass !== '') {
                if (m == 0) {
                    if (elementClass[3] == undefined) { //4 3  
                        start_point1.push(elementClass[0], elementClass[2]);
                        start_point2_1.push(elementClass[0], elementClass[2]);
                        start_point3.push(elementClass[0], elementClass[2]);
                        console.log(start_point1);
                    }
                    else if (elementClass[1] !== undefined && elementClass[2] == " " && elementClass[4] == undefined && elementClass[3] !== undefined && elementClass[0] !== undefined) { //14 3   16 3
                        start_point1.push(elementClass[0] + elementClass[1], elementClass[3]);
                        start_point2_1.push(elementClass[0] + elementClass[1], elementClass[3]);
                        start_point3.push(elementClass[0] + elementClass[1], elementClass[3]);
                        console.log(start_point1);
                    }
                    else if (elementClass[0] !== undefined && elementClass[1] !== undefined && elementClass[2] == " " && elementClass[3] !== undefined && elementClass[4] !== undefined) { //14 34
                        start_point1.push((elementClass[0] + elementClass[1]), (elementClass[3] + elementClass[4]));
                        start_point2_1.push((elementClass[0] + elementClass[1]), (elementClass[3] + elementClass[4]));
                        start_point3.push((elementClass[0] + elementClass[1]), (elementClass[3] + elementClass[4]));
                        console.log(start_point1);
                    }
                    else if (elementClass[3] !== undefined && elementClass[2] !== " " && elementClass[3] !== undefined) { //4 43  17 33
                        start_point1.push(elementClass[0], elementClass[2] + elementClass[3]);
                        start_point2_1.push(elementClass[0], elementClass[2] + elementClass[3]);
                        start_point3.push(elementClass[0], elementClass[2] + elementClass[3]);
                        console.log(start_point1);
                        console.log(elementClass);
                    }
                }
                start_node2 = document.getElementsByClassName(start_point1[0]);
                let start_cord1 = (--start_point1[0]);
                ++start_point1[0];
                let start_cord2 = (--start_point1[1]);
                ++start_point1[1];
                let start = start_cord1 + start_cord2;
                start_node.push(start_node2[start]);
                m = 1;
            }
        });
        x = 1;
    }

    else if (x == 1) {
        x = 2;
        e.target.style.backgroundColor = "green";
        e.target.style.color = "green";
        document.addEventListener('click', (e) => {
            let elementClass = e.target.className;
            if (elementClass !== '') {
                if (n == 0) {
                    if (elementClass[3] == undefined) { //4 3  
                        end_point.push(elementClass[0], elementClass[2]);
                        console.log(end_point);
                    }
                    else if (elementClass[1] !== undefined && elementClass[2] == " " && elementClass[4] == undefined && elementClass[3] !== undefined && elementClass[0] !== undefined) { //14 3   16 3
                        end_point.push(elementClass[0] + elementClass[1], elementClass[3]);
                        console.log(end_point);
                    }
                    else if (elementClass[0] !== undefined && elementClass[1] !== undefined && elementClass[2] == " " && elementClass[3] !== undefined && elementClass[4] !== undefined) { //14 34
                        end_point.push((elementClass[0] + elementClass[1]), (elementClass[3] + elementClass[4]));
                        console.log(end_point);
                    }
                    else if (elementClass[3] !== undefined && elementClass[2] !== " " && elementClass[3] !== undefined) { //4 43  17 33
                        end_point.push(elementClass[0], elementClass[2] + elementClass[3]);
                        console.log(end_point);
                    }
                }
                end_node2 = document.getElementsByClassName(end_point[0]);
                let end_cord1 = (--end_point[0]);
                ++end_point[0]
                let end_cord2 = (--end_point[1]);
                ++end_point[1]
                let end = end_cord1 + end_cord2;
                end_node.push(end_node2[end]);
                n = 1;
            }
        });
    }
    else if (x == 2) {
        x = 3;
        e.target.style.backgroundColor = "red";
        e.target.style.color = "red";
        document.addEventListener('click', (e) => {
            var bg = e.target.style.backgroundColor
            let elementClass = e.target.className;
            if (elementClass !== '') {
                if (bg === "gray") {
                    rc.pop();
                    rc.pop();
                    console.log(rc);
                }
                else if (e.target.id == "Start") {
                }
                else {
                    if (elementClass[3] == undefined) { //4 3  
                        rc.push(elementClass[0], elementClass[2]);
                        console.log(rc);
                    }
                    else if (elementClass[1] !== undefined && elementClass[2] == " " && elementClass[4] == undefined && elementClass[3] !== undefined && elementClass[0] !== undefined) { //14 3   16 3
                        rc.push(elementClass[0] + elementClass[1], elementClass[3]);
                        console.log(rc);
                    }
                    else if (elementClass[0] !== undefined && elementClass[1] !== undefined && elementClass[2] == " " && elementClass[3] !== undefined && elementClass[4] !== undefined) { //14 34
                        rc.push((elementClass[0] + elementClass[1]), (elementClass[3] + elementClass[4]));
                        console.log(rc);
                    }
                    else if (elementClass[3] !== undefined && elementClass[2] !== " " && elementClass[3] !== undefined) { //4 43  17 33
                        rc.push(elementClass[0], elementClass[2] + elementClass[3]);
                        console.log(rc);
                    }
                }
            }
        });
    }
    else if (e.target.style.backgroundColor == "black") {
        e.target.style.backgroundColor = "gray";
        e.target.style.color = "gray"
    }
    else if (x == 3) {
        e.target.style.backgroundColor = "black";
        e.target.style.color = "black"
    }
}
);

function adjacent_node(start_point) {
    let temp = [];
    temp.push(start_point[0]);
    temp.push(start_point[1]);
    let x5 = 0;
    let x6 = 0;
    let x7 = 0;
    let x8 = 0;

    diagonal_node = document.getElementsByClassName(temp[0]);
    let diagonal_cord1 = (--temp[0]);
    ++temp[0];
    let diagonal_cord2 = (--temp[1]);
    ++temp[1];
    diagonal = diagonal_cord1 + diagonal_cord2;
    diagonal2 = diagonal_cord1 + diagonal_cord2;

    let left = temp[0] + " " + (--temp[1]);
    f_node.push(temp[0]);
    f_node.push(temp[1]);
    f_score.push(count + h(temp[0], temp[1], end_point[0], end_point[1]));
    count++;
    ++temp[1];

    //left node
    diagonal_node[--diagonal].style.backgroundColor = "purple";
    diagonal_node[diagonal].style.color = "purple";

    --temp[1];
    for (let i = 0; i < close_list0.length; i++) {
        if (temp[0]==close_list0[i]&&(temp[1]==close_list1[i])) {
            f_score.pop();
            f_score.push(1000000000000000000000000);
        }        
    }
    ++temp[1]

    --temp[1];
    if (temp[0] == temp[1]) {
        for (let i = 0; i < wall.length; i++) {
            if (temp[0] == wall[i]) {
                console.log(wall);
                diagonal_node[diagonal].style.backgroundColor = "black";
                diagonal_node[diagonal].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
        x5 = 1;
    }
    ++temp[1];

    if (x5 == 0) {
        for (let i = 0; i < wall.length; i++) {
            if (left == wall[i]) {
                console.log(wall);
                diagonal_node[diagonal].style.backgroundColor = "black";
                diagonal_node[diagonal].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
    }

    let right = temp[0] + " " + (++temp[1]);
    f_node2.push(temp[0]);
    f_node2.push(temp[1]);
    f_score.push(count2 + h(temp[0], temp[1], end_point[0], end_point[1]));
    count2++;
    --temp[1];

    //right node

    ++temp[1];
    for (let i = 0; i < close_list0.length; i++) {
        if (temp[0]==close_list0[i]&&(temp[1]==close_list1[i])) {
            f_score.pop();
            f_score.push(1000000000000000000000000);
        }        
    }
    --temp[1]

    diagonal_node[++diagonal2].style.backgroundColor = "purple";
    diagonal_node[diagonal2].style.color = "purple";

    ++temp[1];
    if (temp[0] == temp[1]) {
        for (let i = 0; i < wall.length; i++) {
            if (temp[0] == wall[i]) {
                console.log(wall);
                diagonal_node[diagonal2].style.backgroundColor = "black";
                diagonal_node[diagonal2].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
        x6 = 1;
    }
    --temp[1];

    if (x6 == 0) {
        for (let i = 0; i < wall.length; i++) {
            if (right == wall[i]) {
                console.log(wall);
                diagonal_node[diagonal2].style.backgroundColor = "black";
                diagonal_node[diagonal2].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
    }

        //up node

    up = (--temp[0]) + " " + temp[1];
    f_node3.push(temp[0]);
    f_node3.push(temp[1]);
    f_score.push(count3 + h(temp[0], temp[1], end_point[0], end_point[1]));
    count3++;
    ++temp[0];

    --temp[0];
    for (let i = 0; i < close_list0.length; i++) {
        if (temp[0]==close_list0[i]&&(temp[1]==close_list1[i])) {
            f_score.pop();
            f_score.push(1000000000000000000000000);
            f3.pop();
        }        
    }
    ++temp[0]

    vertical_node1 = document.getElementsByClassName(--temp[0]);
    ++temp[0];
    console.log(vertical_node1);
    let vertical_cord1_1 = (--temp[0]);
    ++temp[0];
    let vertical_cord2_1 = (--temp[1]);
    ++temp[1];
    vertical1 = vertical_cord1_1 + vertical_cord2_1;

    if (temp[0] == 3) {
        --vertical1;
    }

    vertical_node1[--vertical1].style.backgroundColor = "purple";
    vertical_node1[vertical1].style.color = "purple";

    --temp[0];
    if (temp[0] == temp[1]) {
        for (let i = 0; i < wall.length; i++) {
            if (temp[1] == wall[i]) {
                console.log(wall);
                vertical_node1[vertical1].style.backgroundColor = "black";
                vertical_node1[vertical1].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
        x7 = 1;
    }
    ++temp[0];

    if (x7 == 0) {
        for (let i = 0; i < wall.length; i++) {
            if (up == wall[i]) {
                console.log(wall);
                vertical_node1[vertical1].style.backgroundColor = "black";
                vertical_node1[vertical1].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
    }

    //down node

    down = (++temp[0]) + " " + temp[1];
    f_node4.push(temp[0]);
    f_node4.push(temp[1]);
    f_score.push(count4 + h(temp[0], temp[1], end_point[0], end_point[1]));
    count4++;

    ++temp[0];
    for (let i = 0; i < close_list0.length; i++) {
        if (temp[0]==close_list0[i]&&temp[1]==close_list1[i]) {
            f_score.pop();
            f_score.push(1000000000000000000000000);
            f4.pop();
        }        
    }
    --temp[0]

    --temp[0];
    vertical_node2 = document.getElementsByClassName(++temp[0]);
    --temp[0];
    console.log(vertical_node2);
    let vertical_cord1_2 = (--temp[0]);
    ++temp[0];
    let vertical_cord2_2 = (--temp[1]);
    ++temp[1];
    vertical2 = vertical_cord1_2 + vertical_cord2_2;

    vertical_node2[++vertical2].style.backgroundColor = "purple";
    vertical_node2[vertical2].style.color = "purple";

    ++temp[0];
    if (temp[0] == temp[1]) {
        for (let i = 0; i < wall.length; i++) {
            if (temp[1] == wall[i]) {
                console.log(wall);
                vertical_node2[vertical2].style.backgroundColor = "black";
                vertical_node2[vertical2].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
            x8 = 1;
        }
    }
    --temp[0];

    if (x8 == 0) {
        for (let i = 0; i < wall.length; i++) {
            if (down == wall[i]) {
                console.log(wall);
                vertical_node2[vertical2].style.backgroundColor = "black";
                vertical_node2[vertical2].style.color = "black";
                f_score.pop();
                f_score.push(10000000000000000);
                console.log(f_score);
            }
        }
    }
    if (temp[0] != f_node[0] || temp[0] != f_node2[0] || temp[0] != f_node3[0] || temp[0] != f_node4[0]) {
        count--;
        count2--;
        count3--;
        count4--;
    }
    close_list0.push(start_point[0]);
    close_list1.push(start_point[1]);
    WHY();
}

function btnBeginPathFind() {
    wall_cords();
    adjacent_node(start_point1);
}

function WHY() {
    if (end_node[0].style.backgroundColor== "red") {
        console.log("hulululu");
        let f_node_dup = [];
        f_node_dup.push(f_node[0]);
        f_node_dup.push(f_node[1]);
        let f_node_dup2 = [];
        f_node_dup2.push(f_node2[0]);
        f_node_dup2.push(f_node2[1]);
        let f_node_dup3 = [];
        f_node_dup3.push(f_node3[0]);
        f_node_dup3.push(f_node3[1]);
        let f_node_dup4 = [];
        f_node_dup4.push(f_node4[0]);
        f_node_dup4.push(f_node4[1]);
        console.log(f_node);
        console.log(f_node2);
        console.log(f_node3);
        console.log(f_node4);

        console.log(f_node_dup);
        console.log(f_node_dup2);
        console.log(f_node_dup3);
        console.log(f_node_dup4);
        console.log(f_score);

        f.push(diagonal_node[diagonal]);
        f2.push(diagonal_node[diagonal2]);
        f3.push(vertical_node1[vertical1]);
        f4.push(vertical_node2[vertical2]);
        if (f_score[0] < f_score[1] && f_score[0] < f_score[2] && f_score[0] < f_score[3] && f_score[0] != f_score[1]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            if (count_horizontal==33) {
                JUST_WHY()
            }
            count_horizontal++;
            adjacent_node(f_node_dup);
            console.log("Hulululululululululululululululu");
        }
        else if (f_score[1] < f_score[0] && f_score[1] < f_score[2] && f_score[1] < f_score[3] && f_score[0] != f_score[1]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup2);
            console.log("Hulululululululululululululululu");
        }
        else if (f_score[2] < f_score[0] && f_score[2] < f_score[1] && f_score[2] < f_score[3] && f_score[2] != f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f4.pop();
            f.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup3);
            console.log("Hulululululululululululululululu");
        }
        else if (f_score[3] < f_score[0] && f_score[3] < f_score[1] && f_score[3] < f_score[2] && f_score[2] != f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup4);
            console.log("Hulululululululululululululululu");
        }


        else if (f_score[0] == f_score[1] && f_score[0] <= f_score[2] && f_score[0] <= f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f4.pop();
            f2.pop();
            f3.pop();
            console.log(f_score);
            count++;
            count2++;
            count3++;
            count4++;
            adjacent_node(f_node_dup);
        }
        else if (f_score[0] == f_score[2] && f_score[0] <= f_score[1] && f_score[0] <= f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup);
        }
        else if (f_score[0] == f_score[3] && f_score[0] <= f_score[1] && f_score[0] <= f_score[1]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f3.pop();
            f4.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup);
        }
        else if (f_score[1] == f_score[2] && f_score[1] <= f_score[0] && f_score[1] <= f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup2);
        }
        else if (f_score[1] == f_score[3] && f_score[1] <= f_score[0] && f_score[1] <= f_score[2]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f.pop();
            f3.pop();
            f4.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup2);
        }
        else if (f_score[2] <= f_score[0] && f_score[2] <= f_score[1] && f_score[2] == f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f4.pop();
            f2.pop();
            f.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup3);
        }
    }
    else{
        end_node[0].style.backgroundColor="red"
        end_node[0].style.color="red"
        start_node[0].style.backgroundColor="green"
        start_node[0].style.color="green"
        show_path();  
    }
}
function JUST_WHY() {
    if (end_node[0].style.backgroundColor== "red") {
        console.log("hulululu");
        let f_node_dup = [];
        f_node_dup.push(f_node[0]);
        f_node_dup.push(f_node[1]);
        let f_node_dup2 = [];
        f_node_dup2.push(f_node2[0]);
        f_node_dup2.push(f_node2[1]);
        let f_node_dup3 = [];
        f_node_dup3.push(f_node3[0]);
        f_node_dup3.push(f_node3[1]);
        let f_node_dup4 = [];
        f_node_dup4.push(f_node4[0]);
        f_node_dup4.push(f_node4[1]);
        console.log(f_node);
        console.log(f_node2);
        console.log(f_node3);
        console.log(f_node4);

        console.log(f_node_dup);
        console.log(f_node_dup2);
        console.log(f_node_dup3);
        console.log(f_node_dup4);
        console.log(f_score);

        f.push(diagonal_node[diagonal]);
        f2.push(diagonal_node[diagonal2]);
        f3.push(vertical_node1[vertical1]);
        f4.push(vertical_node2[vertical2]);
        close_list.push(diagonal_node[diagonal]);
        close_list.push(diagonal_node[diagonal2]);
        close_list.push(vertical_node1[vertical1]);
        close_list.push(vertical_node2[vertical2]);
        if (f_score[0] < f_score[1] && f_score[0] < f_score[2] && f_score[0] < f_score[3] && f_score[0] != f_score[1]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup);
            console.log("Hulululululululululululululululu");
        }
        else if (f_score[1] < f_score[0] && f_score[1] < f_score[2] && f_score[1] < f_score[3] && f_score[0] != f_score[1]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup2);
            console.log("Hulululululululululululululululu");
        }
        else if (f_score[2] < f_score[0] && f_score[2] < f_score[1] && f_score[2] < f_score[3] && f_score[2] != f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f4.pop();
            f.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup3);
            console.log("Hulululululululululululululululu");
        }
        else if (f_score[3] < f_score[0] && f_score[3] < f_score[1] && f_score[3] < f_score[2] && f_score[2] != f_score[3]) {
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            f2.pop();
            f.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            console.log(f_score);
            adjacent_node(f_node_dup4);
            console.log("Hulululululululululululululululu");
        }


        else if (f_score[0] == f_score[1] && f_score[0] <= f_score[2] && f_score[0] <= f_score[3]) {
            f.pop();
            f4.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            adjacent_node(f_node_dup2);
        }
        else if (f_score[0] == f_score[2] && f_score[0] <= f_score[1] && f_score[0] <= f_score[3]) {
            f.pop();
            f2.pop();
            f4.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            adjacent_node(f_node_dup3);
        }
        else if (f_score[0] == f_score[3] && f_score[0] <= f_score[1] && f_score[0] <= f_score[1]) {
            f.pop();
            f2.pop();
            f3.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            adjacent_node(f_node_dup4);
        }
        else if (f_score[1] == f_score[2] && f_score[1] <= f_score[0] && f_score[1] <= f_score[3]) {
            f2.pop();
            f.pop();
            f4.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            adjacent_node(f_node_dup3);
        }
        else if (f_score[1] == f_score[3] && f_score[1] <= f_score[0] && f_score[1] <= f_score[2]) {
            f.pop();
            f3.pop();
            f2.pop();
            console.log(f_score);
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            adjacent_node(f_node_dup4);
        }
        else if (f_score[2] <= f_score[0] && f_score[2] <= f_score[1] && f_score[2] == f_score[3]) {
            f3.pop();
            f2.pop();
            f.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_score.pop();
            f_node.pop();
            f_node.pop();
            f_node2.pop();
            f_node2.pop();
            f_node3.pop();
            f_node3.pop();
            f_node4.pop();
            f_node4.pop();
            adjacent_node(f_node_dup4);
        }
    }
    else{
        end_node[0].style.backgroundColor="red"
        end_node[0].style.color="red"
        show_path();  
    }
}
function show_path(){
    for (let i = 0; i < f.length; i++) {
        f[i].style.backgroundColor="blue";      
        f[i].style.color="blue";  
            }
            for (let i = 0; i < f2.length; i++) {
        f2[i].style.backgroundColor="blue";      
        f2[i].style.color="blue";  
            }
            for (let i = 0; i < f3.length; i++) {
        f3[i].style.backgroundColor="blue";      
        f3[i].style.color="blue";  
            }
            for (let i = 0; i < f4.length; i++) {
        f4[i].style.backgroundColor="blue";      
        f4[i].style.color="blue";  
            }
}








