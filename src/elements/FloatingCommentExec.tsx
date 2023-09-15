import React from "react"
import ReactDOMServer from "react-dom/server"

let base64 =
  "iVBORw0KGgoAAAANSUhEUgAAANUAAABhCAYAAABBG+TgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACEgSURBVHhe7Z0HWFRXFsfPG1SaFKWDgBUsWLH3lthN1cQYY5ItiellN9mYxGQ3m2rcbDYxuiamJ2qqaa4NK/aOFaWIIgqKIE1Rmbf3f+eNvJl5b2DgDWK8v++bj3nDlDdw/++ce+4550pl5ZdlEggEhmFSfgoEAoMQohIIDEaISiAwGCEqgcBghKgEAoMRohIIDEaISiAwGCEqgcBg6p2oZJmowkx0qULmN9wXCK4l6lVGRckFmbIKJcotluliheWxhh5EjT0tP70bSOTbiP1sKJOfp0SeDWSSJMnyRIGgnlBvRFVWTrQqXaYf98qUUyRzi2XFxHTjw8QU6CVRkC9RMLuF+xGF+UsU5idRqK9MIY0laiCcWUE9oF6ICidw8BTRrDVmOsEEVV18G0lMTDJFMnHFNpGoTQhR21CJmnizLyYMmOAqUS9EdZnNm9akyVxUNT2ZRsw9DPaVKDKAqGMEUb8WEkUFSCS0Jahr6o2oVqeZmahqfyoQkQ+bgwX7SNQ1imhcB4u4BIK6ot7MqQ7lEr25ykwni407nYZsjuXnRTSqrUQ3JZjIn90XCNxNvRHVpQqipCMyfbFdpqILMncDebCCGRl+n1mzmp4o7FQMm3Pd00OiHtESF5uYcwncRb0RFTCzMzleyKxWHkLqTFznJf7zdClRPrsVlMlUflmiC+yx8kvsJ/xGF2ZN3g2JhsdJNLa9iaIDLVFFgcBo6pWoqqLsoky5xRIdLZAp7QxRZr5MeSUyFZwnKr2oPKkKoKOEcKIJXUxszsWsloflcYHAKK4pUdkDIcGqpZ5mt1yZMvIlOsOsmXqNS48QX4lu7UQ0rLVE/t7CZAmM45oWlRW4jaeZxTqYS7TnpEzbjsFdtMzLnIGMjJFtTXRbJxOFNlYeFAhqye8iBwFzI2RWDGwl0dTuEj0+QKJhcSZq1EB5gg6Yny09JNNn28xsLnd1ry0rV66ge+6+i7Zt3ao8IrhW+V0l9kBcgcyVS4yW6A+9JJo+1ERtQpy7duWXiZIzZfpqp3xVhZWedoS++/Ybys4+rjwiuFb5XWbLQVxIVeoZK9FLI0w0LsFEHk6+KYS1gQlrARPWSRfSpAQCLX6XorICcQX7EP2JWa3H+psoADmByu/swTrZ2gyZlhwkKilXHrxGuXz5Mp0+nUcPT3uAMjLS+bFcneiNwBB+16KygrxArE89PsBEzYNI12qhdmvxPjOtTUctl/LgVcRsNtO5wkIqLCigixert2aQf+YMvTzjRerWpRN98vF86turBz35xGN0YP/+ar+HoHZcF6ICEFJv5g7+oZeJ2oWRbpkIxPTxNpl25ygZHQZTXl5O+/fto6SklbRxwwbdORSe978lv9Gr/3yFXn55Bv36y89UcPas8lt9Zr71Ji1auIA6d+5M3RITqbi4mOZ/OI8efOCPlJy8ni5duqQ8U+AurhtRAbiD3aIkuqe7ieJC9TPYS8tl+miTmU4ZmIcI4IIt/d8SevihB+jmcWNo8qQ76I3XXqUTJ7KVZ1Ty9Zdf0F13TqT333uX5s2dQ3975q9ciLBezjhy5DBNumsy/bD4F/pgzjxq1KgRBYeEMAuWT+/9+x3KyjqqPFPgLq4rUQEIKyFcorsTJYptqjyoQVYhQu2WNTCjgJVAhG/f3r00ctRoCggIoELm3tlbDwjnjddfo9at29D051+kBx96mBo0aEArli+j3NxTyrP0adGiBXl4eFBEZAR5+/jQKPZZk++eQtt3bKf0tDQxv3Iz152oAISFFKUH+3pQEyfZFMmZZvplv3PL4AoYzBUVFeTn50/PPPscvffBHHphxkvUvHkL5RkWIKrSslIaOmw4PfvcdHrxxZfopptvoeT16ykzI1N5ljYtWrSkefPm0urVq+idWbMoLDSM/vTnB2nEyFHUqlUrunDhQpXWTlA7fhcZFTUFVmgT84ZeS6rQbTDTLFCiV0dLFNZYX3zVAYLCQH/2L09zFy2hY0eKjW3Oe2wkdu9OPsyiPPn4Y/TVgkU0bvxN1Dwminy8fahZdDP++pM5J7mb2KZNHAUEBvDX4T2tP0OZeCCW3bt20cmTORQTE8sjgPhdu/btuTU8evQozftwPo0ZO45MpuvyelonXNeiAlij+i7FzEtOtEDC7ZDWEj01qHaDEAP+lb+/TG/PfJNbKwAXDYMbg3zQ4MFXRHXLrbfRnRNvp59/WsyfVx3wXsD63j179eJuZllZGT8Go0aPobfensUsVmvlEYE7uO5FBU6ck+mdtWbapzNdQS3W04Mkig+tubWCxVizZjVt3rRJeaSS+Ph47gIuW7aUCepWatu2HX/8t19/oT27d1NBQQGtSlpJJiacYcwlDA0LpfLyi+Tl5cncOcuiWkCAPxcu5l6dOnWh3n36UElJCS357VduofD5N944gkcERQcq9yJExYAbuD5Dpv+sZ3MZjaUchN9viDfRQ33rplQE856cnBN80TZlzx76+qsvuaj+8c9XadpDj1DDhg2VZwrqI/VGVFgfKrko80F9/pJEF5lbhgJF68k1ZBdXzwaW/hP+nhLvBYiAg1GcuyDTlztkWnJAJvaxDrQKkmlaXw9KiHD/VR7W7ObxY6ioqIgfY741ZOgwem76C9zSCOo3V1VUzCOh06VIZJUou9BMRwuITrFxdKaUDXLm1RSft4gK3gr6/gUwIaHfX3QTE7VsStSc3dCazMuACzc+Z/sxM320hSirwPFPgoz3iZ0lurOrye39BTEXevKJR/kCcHBwCCUkdKQJE++gjp06Kc8Q1GeuiqjgbmUXyrTrhEwHcolX8WKh1ZUWz7BaLYOI2oeZeFZ6hzCZPVY7K3L+EjFRybQ81dJy2p7EZkR/7uPBhKw84CZgoZB1geBDeEQ4RUU1uxKIENR/6lxUqMxdn24pJEw9w9y9WiavwgWMbSpRLyas4fFEzWrRjgyWc2e2TB9slHnwwp7GzO18YoBE/Vu63wUUXLvU2WIFrNC+k2zAJsu0YDfR7pzaCwrA6h09K9PP+800l4kBn1HTqwTczHbhlq63WgEy9MhApgUsmkCgR52ICk2P1mWgA61MW7LQJUk2NP0HFqaMDXS4k++uk2nnCYvYaoI3cysHtDDxOZw9eM/NWUR5xcoDAoEGbhcVBuLSQ2Z6e42lUaZWZE0PWAvrrTrAGh5nbttbq8x0+LQl+OAq+Kx+LZirh3CjBtmFRCU1qKBA0OGZvzxNPmwyqL716dVdeYY+Z86cpscfe8Thtc0iw5RnVM3KFcspsUsnh/fAbdzokXT0qPP0J+Qi+vt62byuQ9s4/r20wLrYpo0byderoc1rcBs+dJDyLG1+/OF7h9c88vA0ystjE3An/PLzTxQbHenwWtymTJ5Ex4+zOUcd4FZRYTucH/bK9D5z+aoKQmBu5MWsRKAXUYQfUcdIiQayucvgVpafnaOQKoSOs1Xv7nGOWcJXV5gpp4bl8QjZB/lqv/b8JbREM9bSuhsM8L17U3h6lBa7du+ilcuX8+fp4ePjTZ6ensqRBSw2lxRrm21kdmDxWus9UfKCkhQ9UPJiT0R4BPn66nfnweesWpVExcoyhD3r162j48eOO/2ORuE2UWHdadVhM320ueqQHvpKIHP8lo4mem64B71/m4lmjmX3h5no2aGWn6+PNtG7t3jQo/0k6t9C4sJztk6FUP2/1pn5+pOrIC3uxjhJ10JuO2amC9fQvAqFjsePH7+SwmTP2fx8Sk9P17U6ICYmlucXqkE+4YkTzNfWAIJLSlqhHDmSzc5Hj4MHDyj3LHh7e1NERAT/qQes+SH2Or3vACt3YP++OinUdIuocBXfelymz7YrD+iA7ATUN01JJHpmqERTezCLFGnZIsceCCiQ/U3RMenJgSZ6sK+JesVYWjjrceAU0U/7lAMX6RatX2+196RE56+hRJQUZqVWLFvm9CqdmnqIjh1jE0YduvfoQXHx8cqRhZKSYlq/fq1yZAs+69gxfXdr3bo1yj1bMOhzT9m6eW3i4iiubVunScCwRMjgd/YdkdBcWlKiHLkPt4jqaD5z+1LMVOjESgT5SHQbs0wPMcszpr2Jb4NTXTwbEvWKlWgaey129fDSmf/g09GCbP8p1wUQwNxMPUsF62eWq3++VxMMstxTpxyKE/38mKlXsXnzJp5nqDcoIyOjuLVQr5chWRfZH7BK9qQdOUJF584pR458+80i3dcVFhYoRxZatmxFsbGxypEjOGcsmMNaWYEAGze2dReRe3ny5EnlyH0YLqoyZl2XH5YpPR8lCcqDdmBrG1inO7pKvLSipoQ2lmgSe4+bEiTdvhMQwNJDyoELIIMC/da1wNKesytifQL9LbZv2+bg+t119xTlngU8D6Uleu4TBqm/f4BN3qG1wcz58+eVRypZuOBrm8/E69WJvAcOHNCc/6xeneRQtNk0KIiaNNGvKMV5w2VUnwdSu8aOG68cWUA7gh07trv9f2e4qNAhdusxmc05tE8cc6G7mBCGtDHxDQNqCwIX49pLNKyNtjgRIEEkMJNZT1fAuyU20/7zVDArVXTh2rBU2dnZ9P1339oMpL79+tFfn3nWIUtjdVKSZmm/lQ4JCRQYaJtOAnetuNhRHCtWLFPuWQQVERHJROmvPMJex8Sbk5OjHFWya+dOLlYrsDYxMTFcJHqghmxvSorNd+zduw9vK+DlZbt/0o/ff6fccx+GigrrT9vZXEqvtwMXQIKJZyR4MktgFEHs7z2UiTTCT3ug55WY+TqZq2AjAy3wvzO6f4U7wCBDlM2+BP/BaQ/zQe7r66s8YmHt2jVXykS0GH7DDbxEX83Z/LPMShxUjipRz6eQZjV2/HiKjql04WDFkpPXKUeVwFVVf354eATPfdSbT8GFzMzM4Fn9aibccSf/js2aRSuPWIALeOqUe11AQ0WVWShRCrv4aIWbPUwS9WF/05FsrmukoAC8ivgQooGttUV1gV348kpdF0G0kxy/jPyqo5pXG8x5vvziMwfXD/VacMVQoq8GVifnhKXkRAsM0uCgYBs3DoLdyVwqNZi/wZ200q5dO7r//j/azIvwWViPUoMLwCkmKvVcKzIqkltIPbD2tHXLFl4uo6Zf//4UHBLM68rUwL1NWrlSOXIPhokKFbSH87R7kuN/0CyAeH9zH43InhHAlUTmelMfx/fHhQ8bGLhqXZyJ/7LZmO9x+dJl7nI5u6GUviZRq9LSEj63UYMeFn7+liDFo4894WABPpw3l86e1feVAwIDbdzGc+fO8eCCWohokaYmKDiYCyosLOzKnAzWCN9L3XZt27at/P3UNG7sR0FMyHqkpaXRls2blSML+I4o+gwJCWXiGsALN9XMnTNbd3nBCAwTFQICmLtogdB5lyiJOtt6DoaD3elb6/z9z5RIzLooB9VExwviZFXdgq9aHD6cSgP79XV6Gz92NP20+EflFdUHIWb7wMPkKfdcGaRBwUFMYJXzHICgxuk8nX8kA/007Ocp+Ax1kABt2KxAgBAiujphnUu9gIzXqedV25mo1PMzfA7EYR/FswJrl5WZ6eDeTpl6L79Y4LOjohC1jFR+Y2Hnjh1VZpDUBkNEhcF3tpR0Q9d+zDohK0IPpC4Z0RE20FPiGRlalFxi51jZrqHegEgXGrU4u2HQlJayP7CLvPXm6zbzE4Amm9ZJv7eXN/Xu1ZvfV7N9+zblniOjx4zl1kMNyv3z88/w+zwiqBIlBJzQIYFbqC5du/IIopUiJqAtmyvbC2AhWe3GIeI3YOBA5cgRRB6XL1/mEC0cOXKUco/N59icqm3btspRJaikdheGiApzqDz2P9cbtM0CmR8fqhyo4OH3VJm+3C7Twl1m2nSUTaxrkAFhBVa+gU5NFaKArla5OHt2U/1gVL0AgztppW1GAwIGGORWl6+xnx9Nmny3gwv4wez3dedV6OYUyCyPmqyjR+lwaiq/n56eRueKKl04zIm69+jJ72N+ExLK3AkFhNS3bt3CXTEIAy2r1QLBWlr7Dh2UI0fQINTe9UNgomWrVsoRcbezW2J3hxYE6L9oPw8zCkNEdZmpKldnvoL5VFyI4zoSggfIuPhkq0wLmKAW7pJp/haZVqdbSuprAuQk6UhBZueoFUBxRoWTeVMTHxffrI5BlMv+Cn7jiBHUomVlj0HMNeBe2btz+/amXLE8WqDxjBoEC9LSjnCriEYzZSqrioahCIkDuH/oQ2gVMc4PgRHMF2GRYXnUQQpvH6Qn2bpuVvDalJQ9Ngu+YMy4cTZRTVjl5i1acBdUzeHUw7yxqDswRFRYtzmtN49mY6+Txt8FdU+r08w8ORXABTxRhIVamY7ZLqhXG7yHnnAkE4StLxItss7qR/iiAgz501GTpk1591hnt9snTKS4ONsUoap4/dVXHFw/DOBPPv6Yt0mz3r5ZtJA87UQFvvj8M+WeI2jyqQauKawGBjrWjDDXARAP1rVgEa3ENG9uE+goLimm3LxcnhGRc6JyfgXBd+3azSHsbwVzOEQP7QMOebm59K9ZM22+48YNycpvK0EQZ/nypcqRsRhS+Ytiw9kbZVp1xHEQYhx/PtlEwXZRuS93mOnbPdhtXnlAAVG8Z4aYqE9z1wQAECxBoeLqNMevhKggcgtHxFf/fd9LNtNvB7T/PLNv9aBW+kEpBzApf/H56bw3upqEjp1o+Yok5UibM8xqzJr5Fn326SfKIxaQaZCdo10OEREa5BBJQ5DA3g2CZcC52Q9OROwys7IdImcAlim+dUvlyMLjTzxFz784gybefgutXbOGCzqwSROa8dLLfF3MCjLX75s6hbdPA7CUr73xJl9nwmYM1mggLMxHH39KN99yKz+2B65il84J/KcaJN3aL2prfUcIfujQYbToux+cJurWBIMsFaJr+ld1e0EBM3etHB9HwMKVmis1Gez/kXlW+8Vw1xDWdwV0r9UCSbx+XjU8STs8mF+Mwef0xlyXRnZlF85ASzOt1CEMLAxm9Q1rWVrhZQxW+xw8K9HRMQ7uFIQGi5CXa+mKC/z9/GngwMH8vpXBQ4YywVRaH4gJWRQFZwvoguqcef/Czp2VI0d+ZeK0FxTA967Od4TQTp46RRnp6cojxmGMD8Mw6+Z0a+PriZJ1x4GJKuEsJgxXS9ZR6r47G6X1ygMqcGYR/iZqHVz9c0QQRa9spBG72KvWP+sd8/47x2E+VRPmzJ6t3HMkPMw23QSNarA+dVo1x4FljIy09f3hzqmzMuAqIsMB63HqwAFcUr35FPjs04+VezUH87hVq1Y6uMm1xRBRYXz5apSfW4FQ7EHXV70k2C3HZV4PVV3w/iknidZn6oiAeTBh7OLoSiYHuj3p/a1DfNiV1MX5WV2B2qjCgkKbgQKXLyQ0lFsYvRssj33nWogE1k0Le7cMqULIVEDtFsB7IaBhvw4G2re3jejtYvOwHTt22Jxz3779dN0yfEeIWA0EjJQmre9mvWG9S/0d4Wpi43K9wsaaYoioIA5/J96JViZDDPMePHUGJpJfN2aSblKuGgQmsD72wx4z5Wh0QALY/7ebbQqYU/C/XXJIX1T9Wki8l0V95Ouvv+QTfzXYkudvz03nfdT1buPH3+Qw34LblJGRoRzZguCJOhQPi4PonTVIgXkNesTbz28AehiqST10kBcYqrFPoVLz+eefOlQOoyfic88/r/ndrLdBg4fYfEeIGG4rCjSNxBhLxbSB6l0tMDDhztmD+ql4jbUrgHkVyvB/O+h83Qou36ojMn26zUwpOn3QIfi2oRJ1idQ+Py3wmXuwk6JyrKYBGyPtI0y8pqs+siE52eHKiyK/qffezweq3g0CwDqWmqKic/TtooU2FsRKfNu2DpkO6udBcMOH36gc2dJ/wECbrHO4qvbuao+elrUtLbDGZM+AAYNo4sQ7Nb+b9Xbb7RPIxy6aiIvGnt27bEL5tcUwS6W7GMrG8qE8xwGN14xP0B/oRWxgL9xNvAffmjR2RWFWqJh5IlhgRjrU0oNmen8DBCXTQSf9QJBhcXNHfVdTiw1HLZ+vRQi7GKBTbvUlWnegehcTf/UAgVsU1axZlRGufv3684wHtXuESf+mTRs0gx54HgoX9cDvretT9kCMYXZzMjUoEdF774MHDjisL+H92rRpYxO612LY8OEUEly5+AwQ7EBltLOCSlcxRFRoxBKq05MDF6/0M9pXgQ5hEi+P1wMWY006FoXNvEPSy8sq6JUVFfSvtRX02XaZVjMrdcbJ3AvjY2JX13brQIBkU5bMW55p0SdWojDn/7urBvYFtmY2WIH1wdY8arFogRB6WHi4jbsGy4NoHtaQ7MH7Db9B2xKBuHhmyZwMcpTn6wE3Te8igIph+5Qt7L/VvkOCpqupBgm29hkauABhsTsrS7+VgKsYIipMjYJwBde5GJ44J/GaJnsQQLi3p/NSeojyNPsbHmHWaT9z8WCVEOErYBdPfTlZGNXWRCPiTS5ZlXUZZnYRsHyuPWgrjbUpbI5QH0HWt3VTAytNmjahbt0SlSPndOnSlfduV4MAxOIff7Bx7QDcu1tvu91mXqVmwkTbOZc9d066S7nnCNw0PbZs2eQQHo9nAm7ZynbdTI8RI0Y6XGCwYI3KYaNcQENEBQK9ZYoP0R6+xWzuukYnIwSVwE8ONmaTATWDmAX8cx/2vi4EFM5dINp+nLkEZdpybR+G3T/0G8JcTeD6HWY3+3kNRFLdxU0M5jZxbZQjC9ZtfRC0sCcsPEw342H8TTcr97Sxn1epadeuvXLPFljMjPQMm++IjcKxI2XTpkHKI85B8SJcYjVYyzp08KBuuzVXMayXeulFmQcXvt7pGDWDJUuMkmj6Ddol9NgMYCObxyAbAs1itKxEdcBgR2dZlNZPSZR4pXF1wTn8yM7/K3b+9lkeAOH4KYkmur1zfZSUoD5hmKVC8WHLpiZN1whh78wCYsIxa7psDT0k6ttcokf6S9SOWQNXrRasOV4D1wzu5NTuJpcEhfNLzbMEKLQEhXdqySxUxzrYm0pw7WOYqDDcYpvKzEXSHnhnmUsFa4S9p7RAISOE9Wg/E41pZ6I45to7W1AGEBOie+3D0fzFRE8N8qCx7STydWHOA6uIdbRfDshMWNomEhvN9WnOfHedJQCBQI2hW+lg98PF+8y0aLd2+YY/E8AdXSQazQa+t06vPoB20QgWpJ6W+RoXhIh5GRaDIT4f9trGTHAhjYmaN5EoLlRigiZiBs9lSsqJb6L98wFmRTX+EhBux3CipwebKEynsYxAoMbw/anS84lmJ1fwzdy0aMEGPzZOQyfa6mT6YNCjPKT0osTFhvA9gg8+jWSeKVGbjd7g6qGea1mqWTfXMJC5kU8Mkqh3bO0EhaI/7DaPIr6p997Ha4uQFfD3l2bw9RMsSqoXNd94c6ZNEADdVTesX0+Tp0zhPRjQbxxVr6hyxZrP/PkfKs8kmv78CzRr5kwqv2ibYpSQkMCDEfYRPoGxGOb+WYkJlKlXLOZW2oMwi82tUOWbU810K8zRogMlXjncKcISgcMOiuHMatRGULB6czaa+Y4kzpJ3RzGrih0UawvCwOjmCmFZSzIuXDhPX3z+Kc/SbtSwEe3etZPmfziPzpeVMQtp+93279vL12jQEjkjI51mvPA8Ja9bx7MlkNF95HAqf+2Z06d51A89GJD+8+nH8y1iTjvCQ+5GJNoKnGO4qBB0GNIaQpA1Q88ICqBA8b9sQBe5p5q5SjC/e2u1TElHZF6BrEcH5vZN6Iwd6WtnpaoDGqr07NWbi+ne+/+gGwa/XHGZnnzsUW7xvlq4iLdERsoQNtrGa5FXB0s0e85ceuff7/Gq3sTE7jR33kf0+BNP8gVQgXsxXFQAqTyTujJr5VhQykG91I5smWYsreAlFnUF5kxYPP77cjPfvM1Zsxm4lv8Y4aG5+Zs7wHqLZyNLhKWxr202tZoXpv+NkpPX0zff/XClGhhJotaSeKz9ILMALiGyxPE+ECgyuFFlrFV0KDAWt4gK46FHtEQj4iTdeRMs1qE8omnfm3mraIOndjbgswrZvOzXAzK9nmTm4XOzzmIYThcdb18b08ClKGJdkJ19nLl0h3gmOMoyjEwCFRiHW0QFIKzJiSY2H9EXFkDDmNdWyvR9imXz6osGigu6yS+zWMW311jmUHkl+u+P04zwl+jxgR4U08S487ACq1FefvFKmk1hYSGf/3h565h0OxDsQANMdCVa8PVXvBZIUP9wm6gAsieeGmyirlGWrHQ9sPPhgl2W/Xoxz0E9ldYibHWAkNAzA40zkYw7b5OZWyf0eIfF0gPCR1j+/p6S5XydXAhqAlwyuHjHj2XxKB627kQrMPTQ69WrD8/ZQ6kFQEWqlhWCSzdg0CB6/Y2Z5B8QQA9Pe4AX2iGFCIWJIC+vsqZJcHVwq6gA5iYP9DFRzxjJ6UDF/CaFuYEfbpZp7qYKvtaFSt6MfNRUKU/SAaH2nCKZV/8uTzXTV0ygH2ysoFlrzbSWCauqeRt6TiBj/r6eJr7vFdbCjAaiwm4byJL+z7v/pscefZh+XryYRo8dyzO20VQymYkNeW0fvP+eZvNMzI0aNmjIn4/e5IgCIpSOnLglS37jr0U0saq9cQXuxfB1Ki1gPY4WEC3YaaYtx7Rz6+yB+4iAR7i/zDshNWEeUgCb63ipwujYfxeCKUKdValMZ88jo13iJSP4zOrQiAkIlbw3JViyOKqzdlZTUJqOjdWw925ZWSlfq+rarRvf+hPl4Rs2rFeeSXTP1Pts+vFBOPv376PBQ4Zwi4Wy9W++WcjfA1Wv2CjbyoQJd/CgBOqgFjI3MTomhkcHqyqNEBhDnYgKwPWCNfl5n0yr0ohKyl37WAx2LPqqxwWmJrBSWj0wqoOvp0STuhANaIkaKTeqSXBdUWeiAvigEmZF1jK3buFOS/rR1QBWsFc00dQeHhTh73oCr0DgjDoVlZUKZrZOFBF9xOZP2HWxroCY0HDmji6WuVNVCbsCQU24KqKygnkPSte/2W3m6UuYazmL0NUEuI2ohQr3s6QcDWaunr9OkxqBwAiuqqisnL/ILFY20do0mYsLTSwRgKipwBB88G2EIkXLZnPog4HFaGGZBHVBvRCVFZSOQFQpJ82Ulm+pvSo6b6kqvnBZ4gvDCEpAbLA1sEDYdAA/vRvKPPk2wEviJfooKmwXDndPWCVB3VKvRKUG+YGnimTKLZGooMySfAvrdbFC4ntNkSRzy4NSEH8mpEBvS892dDpCvp47Q+MCgTPqragEgmsVt2dUCATXG0JUAoHBCFEJBAYjRCUQGIwQlUBgMEJUAoHBCFEJBAYjRCUQGIwQlUBgMEJUAoHBCFEJBIZC9H8N2KynRYkKgQAAAABJRU5ErkJggg=="

type ComponentTypes = {}
const Property = (props) => {
  return (
    <div
      className="border-box mr-[10px] flex h-[32px] w-fit min-w-[32px] items-center justify-center rounded bg-gray-300 p-2 transition-all hover:opacity-50"
      onMouseDown={props.onMouseDown}
    >
      {props.name}
    </div>
  )
}

const Image = (props) => {
  return (
    <div className="group relative w-fit">
      <img src={`data:image/pngg;charset=utf-8;base64,${base64}`} />
      <div className="absolute right-0 top-0 text-red-900 opacity-0 transition-all hover:opacity-50 group-hover:opacity-100">
        <svg
          aria-label="Close Icon"
          aria-hidden="true"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  )
}

const styles = {
  bold: "B",
  italic: "I",
  underline: "U",
  strikeThrough: "S",
  subscript: "SubS",
  superscript: "SuperS",
  removeFormat: "Plain",
}

export const FloatingCommentExec: React.FC<ComponentTypes> = (props) => {
  return (
    <div className="align-center box-border flex h-min w-[400px] flex-col items-center justify-center rounded shadow-md">
      <div className={"flex w-full flex-row justify-start p-2"}>
        {Object.entries(styles).map(([id, acronym]) => {
          return (
            <Property
              name={acronym}
              key={`property-${id}`}
              onMouseDown={(event) => {
                event.preventDefault()
                document.execCommand(id, false, null)
                console.log(`Executing ${id}`)
                // perform(id)
              }}
            />
          )
        })}
        <Property
          name="Image"
          key={`property-insertImage`}
          onMouseDown={(event) => {
            event.preventDefault()
            let html = ReactDOMServer.renderToString(<Image />)
            document.execCommand("insertHTML", false, html)

            // const byteCharacters = atob(base64)
            // const byteNumbers = new Array(byteCharacters.length)
            // for (let i = 0; i < byteCharacters.length; i++) {
            //   byteNumbers[i] = byteCharacters.charCodeAt(i)
            // }
            // const byteArray = new Uint8Array(byteNumbers)
            // const blob = new Blob([byteArray], { type: "image/png" })

            // let url = URL.createObjectURL(blob)

            // document.execCommand("insertImage", false, url)
          }}
        />
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>

      <div className=" box-border w-full p-2">
        <div
          contentEditable="true"
          className="rtl h-[150px] w-full resize-none overflow-auto overflow-x-hidden border-none font-['Arial'] text-[16px] outline-none"

          // onKeyDown={(event) => {
          //   if (event.key == "Tab") {
          //     event.preventDefault()
          //     document.execCommand("indent", false, null)
          //     return
          //   }
          // }}
        ></div>
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <button
        className="my-1 rounded bg-cyan-800 p-2 py-1 text-white"
        onClick={() => {}}
      >
        Submit
      </button>
    </div>
  )
}
