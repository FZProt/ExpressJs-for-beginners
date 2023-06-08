#include <stdio.h>
#include <stdlib.h>


void merge(int a[], int l, int mid, int r){

}

void merge_sort(int a[], int l, int r)
{
    int mid = r+l/2;

    merge_sort(a,l,mid);
    merge_sort(a,mid+1,r);

    merge(a,l,mid,r);
}

void print(int a[], int n){
    for(int i=0; i<n; i++){
        printf("%d ", a[i]);
    }printf("\n");
}

int main(){
    int a[] = {13,5,21,7,3,12,1,6};
    int max_size = sizeof(a)/sizeof(a[0]);
    printf("Before sort: ");
    print(a,max_size);

    merge_sort(a,0,max_size-1);

    printf("After sort: ");
    print(a,max_size);

    return 0;
}