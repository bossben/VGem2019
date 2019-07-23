def split(strin):
	c = open("done.txt","w+")
	while(len(strin)>0):
		c.write(strin[0:3])
		c.write(" ")
		if(strin[0:3]=="aat" and strin[3:6]=="ttc"):
			c.write("\n\n\n")
		strin = strin[3:]
	c.close()
def removeend(strin):
	count = 0
	for char in strin:
		count+=1
		if(char=='\n'):
			print('hi')
			strin = strin[0:count]+strin[count+1:]

textname = "data.txt"
whole = ""
f = open(textname, "r")
for line in f:
	whole+=line
whole = whole.replace(' ', '')
whole = whole.replace('\n','')
print(whole)
split(whole)
