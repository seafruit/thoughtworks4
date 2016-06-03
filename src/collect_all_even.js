
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 	var sa=[],sb=[],sab=[];
 	//获取a中key值放入数组sa 
	for(var i = 0; i <collection_a.length; i++){		 
		 sa.push(collection_a[i].key);
	}
	//获取b中kvalue值放入数组sb 
	sb= object_b.value;	

	//查询交集
	for(var i=0;i<sa.length;i++){
		for(var j=0;j<sb.length;j++){			
			if(sa[i]==sb[j]){
				sab.push(sa[i]);
			}
		}
	}
	return sab;	
}

module.exports = collect_same_elements;
