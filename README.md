
Example

```md
# AAAA

aaaaaaa foobar.

<BEGIN SOURCE --render=false>

|Category|Sub-category|Item|Unit Cost|Qty|
|---|---|---|---|---|
|Electrical|Wires|14/2 (/m)|2|75|
|Electrical|Wires|10/3 (/m)|9.98|10|
|Electrical|Devices|Breakers|29.97|3|

<END SOURCE>

<BEGIN PIVOT>
rows={Category},{Sub-category}
value=SUM({Unit Cost}*{Qty})
header=Value
sort={Category} ASC,{Value} DESC
<END PIVOT>

aaa

## BBBBBBBB

Yes

```
