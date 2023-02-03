'use strict';
const btn = document.getElementById('cidr_ip_btn')
const btn_result = document.getElementById('cidr_output_ip_btn');
const ip = document.getElementById('cidr_ip');
const result = document.getElementById('cidr_ip_output');

btn.addEventListener('click', function() {
    let ip_array = ip.value.split('\n');
    let output = '';
    ip_array.forEach(ip_node => {
        let node_arr = ip_node.split('/');
        let n = node_arr[0].lastIndexOf('.');
        let last_num = parseInt(node_arr[0].substring(n + 1));
        let first_num = node_arr[0].substring(0, n);
        if (last_num < node_arr[1]) {
            for (let i = last_num; i <= node_arr[1]; i++) {
                output += first_num + '.' + i + '\n';
            }
        } else if (last_num > node_arr[1]) {
            for (let h = last_num; h >= node_arr[1]; h--) {
                output += first_num + '.' + h + '\n';
            }
        }
    });
    result.value = output;
});